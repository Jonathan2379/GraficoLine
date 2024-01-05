import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  VictoryLine,
  VictoryChart,
  VictoryVoronoiContainer,
  VictoryTooltip} from 'victory-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Eu sou o gráfico </Text>
      
      <VictoryChart height={400} width={400}
        domainPadding={{ y: 100 }}
        containerComponent={
          <VictoryVoronoiContainer
            voronoiDimension="x"
            labels={({ datum }) => `y: ${datum.y}`}
            labelComponent={
              <VictoryTooltip
                cornerRadius={0}
                flyoutStyle={{ fill: "white" }}
              />}
          />}
      >
        <VictoryLine
          data={[
            { x: 1, y: 32, 1: "one" },
            { x: 2, y: 35, 2: "one point five" },
            { x: 3, y: 39, 3: "two" },
            { x: 4, y: 41, 4: "three" },
            { x: 5, y: 44.8, 5: "four" },
            { x: 6, y: 47.8, 6: "five" },
            { x: 7, y: 49.8, 7: "five" },
            { x: 8, y: 33, 8: "five" },
            { x: 9, y: 33.5, 9: "five" },
            { x: 10, y: 33.8, 10: "five" },
            { x: 11, y: 36.8, 11: "five" },
            { x: 12, y: 38.8, 12: "five" },
            { x: 13, y: 40.8, 13: "five" },
            { x: 14, y: 42.8, 14: "five" },
            { x: 15, y: 45.8, 15: "five" },
            { x: 16, y: 49.8, 16: "five" }
                        
          ]}
          style={{
            data: {
              stroke: "tomato",
              strokeWidth: ({ active }) => active ? 4 :2
            },
            labels: { fill: "tomato" }
          }}
        />

        <VictoryLine
          data={[
            { x: 1, y: 30, l: "red" },
            { x: 2, y: 32, 2: "red" },
            { x: 3, y: 33, 3: "red" },
            { x: 4, y: 36, 4: "green" },
            { x: 5, y: 38, 5: "blue" },
            { x: 6, y: 40, 6: "blue" },
            { x: 7, y: 45, 7: "blue" },
            { x: 8, y: 30, 6: "blue" },
            { x: 9, y: 31, 6: "blue" },
            { x: 10, y: 32, 6: "blue" },
            { x: 11, y: 35, 6: "blue" },
            { x: 12, y: 37, 6: "blue" },
            { x: 13, y: 39, 6: "blue" },
            { x: 14, y: 41, 6: "blue" },
            { x: 15, y: 44, 6: "blue" },
            { x: 16, y: 48, 6: "blue" },
            
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
            { x: 1, y: 26, l: "cat" },
            { x: 2, y: 28, 2: "cat" },
            { x: 3, y: 30, 3: "cat" },
            { x: 4, y: 32, 4: "cat" },
            { x: 5, y: 34, 5: "dog" },
            { x: 6, y: 36.9, 6: "cat" },
            { x: 7, y: 38.9, 6: "cat" },
            { x: 8, y: 27, 6: "cat" },
            { x: 9, y: 28, 6: "cat" },
            { x: 10, y: 30, 6: "cat" },
            { x: 11, y: 31.9, 6: "cat" },
            { x: 12, y: 33.9, 6: "cat" },
            { x: 13, y: 35.9, 6: "cat" },
            { x: 14, y: 37.2, 7: "bird" },
            { x: 15, y: 38.9, 6: "cat" },
            { x: 16, y: 41, 6: "cat" },
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
