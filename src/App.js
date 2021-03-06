import "./styles.css";
import Header from "./header.js";
// import CompanyList from "./portfolio.js";
import CompanyList from "./NewPortfolio.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import PieChartLegend from "./chartmaker.js";
import SectorialPieChart from "./SectorialChart.js";

// import { IgrItemLegend } from "igniteui-react-charts";
// import { IgrItemLegendModule } from "igniteui-react-charts";
// import { IgrPieChart } from "igniteui-react-charts";
// import { IgrPieChartModule } from "igniteui-react-charts";
// import props from "./data/companylist.json";
// IgrPieChartModule.register();
// IgrItemLegendModule.register();

// function generateColor() {
//   return "#" + Math.random().toString(16).substr(-6);
// }

// const pieData = props.map((data, key) => {
//   return { title: data.symbol, value: data.quantity };
// });

export default function App() {
  return (
    <>
      <Header />
      <div className="p-4">
        <Row>
          <Col xl={4} lg={4} md={4} sm={4} xs={12}>
            <Row>
              <CompanyList />
            </Row>
          </Col>
          <Col>
            <Row>
              <PieChartLegend />
              {/* <IgrPieChart
                dataSource={pieData}
                labelMemberPath="title"
                labelsPosition="OutsideEnd"
                labelExtent={30}
                valueMemberPath="value"
                legendLabelMemberPath="title"
                width="500px"
                height="500px"
                radiusFactor={0.6}
                startAngle={0}
                othersCategoryThreshold="0"
              />
              <IgrItemLegend ref={IgrItemLegend.legend} /> */}
              <SectorialPieChart />
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}
