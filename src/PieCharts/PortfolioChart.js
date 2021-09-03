import React from "react";
import { IgrItemLegend } from "igniteui-react-charts";
import { IgrItemLegendModule } from "igniteui-react-charts";
import { IgrPieChart } from "igniteui-react-charts";
import { IgrPieChartModule } from "igniteui-react-charts";
import props from "../data/companylist.json";
import { Col } from "react-bootstrap";
IgrPieChartModule.register();
IgrItemLegendModule.register();

const pieData = props.map((data, key) => {
  return { title: data.symbol, value: data.quantity };
});

export default class PieChartLegend extends React.Component {
  constructor(props) {
    super(props);
    // this.myRef = React.createRef();
    this.state = { pieData };
    this.onChartRef = this.onChartRef.bind(this);
    this.onLegendRef = this.onLegendRef.bind(this);
  }
  onChartRef(chart) {
    if (!chart) {
      return;
    }
    this.chart = chart;
    if (this.legend) {
      this.chart.legend = this.legend;
    }
  }
  onLegendRef(legend) {
    if (!legend) {
      return;
    }
    this.legend = legend;
    if (this.chart) {
      this.chart.legend = this.legend;
    }
  }

  render() {
    return (
      <>
        <Col xl={6} lg={6} md={6} sm={12} xs={12} className="aligner">
          <span className="igLegend-title">Portfolio Distribution</span>
          <IgrPieChart
            ref={this.onChartRef}
            dataSource={this.state.pieData}
            // labelMemberPath="title"
            // labelsPosition="OutsideEnd"
            // labelExtent={30}
            valueMemberPath="value"
            legendLabelMemberPath="title"
            width="400px"
            height="350px"
            radiusFactor={0.6}
            startAngle={60}
            othersCategoryThreshold="0"
          />

          <IgrItemLegend ref={this.onLegendRef} />
        </Col>
      </>
    );
  }
}
