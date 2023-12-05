import React from "react";
import LayoutApp from "../../components/layout";
import Reference from "./reference";
import { Col, Row, Typography } from "../../utils/Desing";
import InfiniteScroll from "react-infinite-scroll-component";
import { useGetOrderId } from "../../hooks/order";
import { CSSProperties, useEffect, useState } from "react";
import { useGetReferences } from "../../hooks/reference";
import ReferenceComponent from "./reference";
import { Product, reference, Stock } from "../../interface/reference";
import { ReferenceData, StatusOrder } from "../../graphql/types.graphql";
import { getOrderId, config, removeOrderId } from "../../utils/auth";
import { Router, useLocation, useNavigate, useNavigation, useRoutes } from "react-router-dom";
import { sx, styles } from "./styles";
import { SHOP_ID, WAREHOUSE_ID, COMPANY_ID, CUSTOMER_ID, CATALOGO  } from "../../ViteConfg";

const warehouseId = WAREHOUSE_ID;
const companyId = COMPANY_ID;
const shopId = SHOP_ID;
const customerMock = CUSTOMER_ID;
const catalogoValue = CATALOGO;

const CatalogoApp: React.FC = () => {

  const [references, setReferences] = useState<Partial<ReferenceData[]>>([]);

  const router = useLocation();

  const orderId = getOrderId();

  const query = router.pathname;

  const [getReferences, { data, loading }] = useGetReferences();
  const [getOrder, dataOrder] = useGetOrderId();

  const searchReferences = async (pageLocal?: number) => {
    let response;
    if (!dataOrder.data) {
      if (orderId) {
        response = await getOrder({
          variables: {
            id: orderId,
          },
        });

        if (response?.data?.orderId?.order?.status === StatusOrder.Cancelled) {
          removeOrderId();
         // router.reload();
        }
      }
    }

    const currentPage =
      pageLocal !== undefined
        ? pageLocal + 1
        : (data?.references?.page || 0) + 1;
    try {
      await getReferences({
        variables: {
          input: {
            active: true,
            page: currentPage,
           // name: query as string,
            customerId: customerMock,
            shopId,
            sort: {
              updatedAt: -1,
            },
          },
          companyId: companyId || "",
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    searchReferences(0);
  }, [query]);

  let datas: reference[] = [];

  data?.references?.docs?.forEach((f) => {
    let products: Product[] = [];

    if (f?.products?.length > 0) {
      const filters = [...f.products].filter((f) =>
        f.images?.find((s) => s._id !== "629fb925e840197cdb7b1af5")
      );
      products = filters.sort((a, b) => a.size.weight - b.size.weight);
    }

    datas.push({
      ...f,
      products,
    });
  });

  useEffect(() => {
    if (data?.references?.docs?.length || 0 > 0) {
      if (data?.references?.page === 1) {
        setReferences(
          datas?.filter((reference) => {
            return !!reference.products.find(
              (product) =>
                !!product?.stock?.find(
                  (stock: Stock) =>
                    stock?.warehouse?._id === warehouseId &&
                    stock?.quantity !== undefined &&
                    stock.quantity > 0
                )
            );
          }) as ReferenceData[]
        );
      } else {
        const newReferences = references.concat(
          datas?.filter((reference) => {
            return !!reference.products.find(
              (product) =>
                !!product?.stock?.find(
                  (stock: Stock) =>
                    stock?.warehouse?._id === warehouseId &&
                    stock?.quantity !== undefined &&
                    stock.quantity > 0
                )
            );
          }) as ReferenceData[]
        );
        setReferences(newReferences);
      }
    } else if (!loading) {
      setReferences([]);
    }
  }, [data?.references]);

  useEffect(() => {
    if (references.length < parseInt(catalogoValue) && !query) {
      searchReferences();
    }
  }, [references]);


  return (
    <LayoutApp>
    
    <div>
      {references?.length <= 0 && !loading ? (
        <div style={styles.containerLoading as CSSProperties}>
          <img width="20%" src="/src/assets/flor.png" alt="flor" />
          <Typography.Text>
            Sin resultados para la busqueda
          </Typography.Text>
        </div>
      ) : (
        <div
          style={{
            minWidth: "30%",
            marginLeft: "2%",
          }}
        >
          <InfiniteScroll
            dataLength={references?.length || 0}
            next={() => searchReferences()}
            hasMore={
              (data?.references?.totalPages || 0) >
              (data?.references?.page || 0)
            }
            loader={
              <Typography.Text>
                hola
              </Typography.Text>
            }
            scrollThreshold={0.8}
          >
            <Row >
              {references.map((reference, key) => (
                <Col
                  key={key}
                  md={6}
                  sm={6}
                  lg={4}
                  xs={12}
                  style={{
                    marginBottom: 1,
                  }}
                >
                  {
                    <ReferenceComponent
                      titlePrice="20.000"
                      reference={reference}
                    />
                  }
                </Col>
              ))}
            </Row>
            {loading && (
              <Row >
                <Col
                  xs={12}
                >
                  <Typography.Text>
                    Cargando...
                  </Typography.Text>
                  
                </Col>
              </Row>
            )}
          </InfiniteScroll>
        </div>
      )}
    </div> 
    </LayoutApp>
  )

};

export default CatalogoApp;
