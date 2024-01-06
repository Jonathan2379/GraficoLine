import { StyleSheet, Text, View } from 'react-native';
import {
  VictoryLine,
  VictoryChart,
  VictoryVoronoiContainer,
  VictoryTooltip} from 'victory-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Eu sou o gráfico Line </Text>
            
    <VictoryChart height={180} width={450}
    domainPadding={{ y: 15}}
    containerComponent={
      
      <VictoryVoronoiContainer
        voronoiDimension="x"
        labels={({ datum }) => `y: ${datum.y}`}
        zoomDomain = {{x: [5, 35], y: [0, 100]}}
        labelComponent={
          <VictoryTooltip
            cornerRadius={0}
            flyoutStyle={{ fill: "white" }}
          />}
      />}
    >
    <VictoryLine
      const data = {[
      { x: "1h", y: 30, l: 1 },
      { x: "2h", y: 35, l: 2 },
      { x: "3h", y: 40, l: 3 },
      { x: "4h", y: 30, l: 4 },
      { x: "5h", y: 35, l: 5 },
      { x: "6h", y: 40, l: 6 },
      { x: "7h", y: 30, l: 7 },
      { x: "8h", y: 35, l: 8 },
      { x: "9h", y: 40, l: 9 },
      { x: "10h", y: 30, l: 10 },
      { x: "11h", y: 35, l: 11 },
      { x: "12h", y: 40, l: 12 },
      { x: "13h", y: 30, l: 13 },
      { x: "14h", y: 35, l: 14 },
      { x: "15h", y: 40, l: 15 },
      { x: "16h", y: 30, l: 16 },
      { x: "17h", y: 35, l: 17 },
      { x: "18h", y: 40, l: 18 },
      { x: "19h", y: 30, l: 19 },
      { x: "20h", y: 35, l: 20 },
      { x: "21h", y: 40, l: 21 },
      { x: "22h", y: 30, l: 22 },
      { x: "23h", y: 35, l: 23 },
      { x: "24h", y: 40, l: 24 },
      ]}

      style={{
        data: {
          stroke: "tomato",
          strokeWidth: ({ active }) => active ? 4 : 2
        },
        labels: { fill: "tomato" }
      }}
    />

    <VictoryLine
      const data = {[
        { x: "1h", y: 28, l: 1 },
        { x: "2h", y: 31, l: 2 },
        { x: "3h", y: 32, l: 3 },
        { x: "4h", y: 35, l: 4 },
        { x: "5h", y: 38, l: 5 },
        { x: "6h", y: 40, l: 6 },
        { x: "7h", y: 42, l: 7 },
        { x: "8h", y: 28, l: 8 },
        { x: "9h", y: 31, l: 9 },
        { x: "10h", y: 32, l: 10 },
        { x: "11h", y: 35, l: 11 },
        { x: "12h", y: 38, l: 12 },
        { x: "13h", y: 40, l: 13 },
        { x: "14h", y: 42, l: 14 },
        { x: "15h", y: 28, l: 15 },
        { x: "16h", y: 31, l: 16 },
        { x: "17h", y: 32, l: 17 },
        { x: "18h", y: 35, l: 18 },
        { x: "19h", y: 38, l: 19 },
        { x: "20h", y: 40, l: 20 },
        { x: "21h", y: 40, l: 21 },
        { x: "22h", y: 28, l: 22 },
        { x: "23h", y: 31, l: 23 },
        { x: "24h", y: 32, l: 24 },
        ]}
      style={{
        data: {
          stroke: "blue",
          strokeWidth: ({ active }) => active ? 4 : 2
        },
        labels: { fill: "blue" }
      }}
    />

    <VictoryLine
      data={[
        { x: "1h", y: 30, l: 1 },
        { x: "2h", y: 32, l: 2 },
        { x: "3h", y: 38, l: 3 },
        { x: "4h", y: 29, l: 4 },
        { x: "5h", y: 35, l: 5 },
        { x: "6h", y: 40, l: 6 },
        { x: "7h", y: 31, l: 7 },
        { x: "8h", y: 33, l: 8 },
        { x: "9h", y: 39, l: 9 },
        { x: "10h", y: 28, l: 10 },
        { x: "11h", y: 34, l: 11 },
        { x: "12h", y: 41, l: 12 },
        { x: "13h", y: 30, l: 13 },
        { x: "14h", y: 32, l: 14 },
        { x: "15h", y: 38, l: 15 },
        { x: "16h", y: 29, l: 16 },
        { x: "17h", y: 35, l: 17 },
        { x: "18h", y: 40, l: 18 },
        { x: "19h", y: 31, l: 19 },
        { x: "20h", y: 33, l: 20 },
        { x: "21h", y: 39, l: 21 },
        { x: "22h", y: 28, l: 22 },
        { x: "23h", y: 34, l: 23 },
        { x: "24h", y: 41, l: 24 },
      ]}
    style={{
      data: {
        stroke: "black",
        strokeWidth: ({ active }) => active ? 4 : 2
      },
      labels: { fill: "black" }
    }}
    />
    </VictoryChart>




    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
