import React from 'react';
import { ScrollView, StyleSheet, processColor, Dimensions } from 'react-native';
import { PieChart } from 'react-native-charts-wrapper';
import { Button, Text } from 'native-base';

class BankScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      legend: {
        enabled: true,
        textSize: 15,
        form: 'CIRCLE',
        textColor: processColor('white'),
        horizontalAlignment: "RIGHT",
        verticalAlignment: "CENTER",
        orientation: "VERTICAL",
        wordWrapEnabled: true
      },
      data: {
        dataSets: [{
          values: [
            {value: 40, label: 'Sandwiches'},
            {value: 21, label: 'Salads'},
            {value: 15, label: 'Soup'},
            {value: 9, label: 'Beverages'},
            {value: 15, label: 'Desserts'}
          ],
          label: '',
          config: {
            colors: [
              processColor('#C0FF8C'),
              processColor('#FFF78C'),
              processColor('#FFD08C'),
              processColor('#8CEAFF'),
              processColor('#FF8C9D')
            ],
            valueTextSize: 20,
            valueTextColor: processColor('#364E80'),
            sliceSpace: 5,
            selectionShift: 0,
            // xValuePosition: "OUTSIDE_SLICE",
            // yValuePosition: "OUTSIDE_SLICE",
            valueFormatter: "#.#'%'",
            valueLineColor: processColor('#364E80'),
            valueLinePart1Length: 0.5,
            visible: true,
            drawValues: false,
            highlightEnabled: true,
          }
        }],
      },
      //highlights: [{x:100, y: 100, dataIndex: 1}],
      description: {
        text: 'This is Pie chart description',
        textSize: 15,
        textColor: processColor('white'),
        horizontalAlignment: "CENTER",
      }
    };
  }

  handleSelect = (event) => {
    let entry = event.nativeEvent
    if (entry == null) {
      this.setState({...this.state, selectedEntry: null})
    } else {
      this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
    }

    console.log(event.nativeEvent)
  }

  updateData = () => {
    this.setState({
      ...this.state,
      data: {
        dataSets: [{
          ...this.state.data.dataSets[0],
          values: [
            {value: 45, label: 'Sandwiches'},
            {value: 21, label: 'Salads'},
            {value: 15, label: 'Soup'},
            {value: 9, label: 'Beverages'},
            {value: 10, label: 'Desserts'}
          ]
        }],
      },
    })
  };

  render() {
    return (
      <ScrollView  style={styles.content}>
        <PieChart
          style={styles.bar}
          logEnabled={true}
          chartBackgroundColor={processColor('transparent')}
          chartDescription={this.state.description}
          data={this.state.data}
          legend={this.state.legend}
          highlights={this.state.highlights}
          entryLabelColor={processColor('#364E80')}
          entryLabelTextSize={14}
          drawEntryLabels={true}
          usePercentValues={true}
          animation={{durationX: 500}}
          rotationEnabled={true}
          rotationAngle={45}
          // styledCenterText={{text:'Pie center text!', color: processColor('blue'), size: 20}}
          centerTextRadiusPercent={0}
          holeRadius={40}
          holeColor={processColor('transparent')}
          transparentCircleRadius={45}
          transparentCircleColor={processColor('#f0f0f088')}
          maxAngle={360}
          onSelect={this.handleSelect.bind(this)}
          onChange={(event) => alert(1)}
          marker={{enabled: true, markerColor: processColor('white'), textColor: processColor('#364E80'), textSize: 20}}
        />
        <Button
          full
          style={styles.button}
          onPress={this.updateData}>
          <Text style={styles.textButton}>Update data</Text>
        </Button>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 40
  },
  bar: {
    marginTop: 10,
    height: Dimensions.get('window').height / 2,
    width: Dimensions.get('window').width - 40
  },
  button: {
    marginTop: 40
  },
  textButton: {
    color: '#ffffff'
  }
});
export default BankScreen;