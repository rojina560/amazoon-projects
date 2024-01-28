
import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";
const LineChart = () => {
    
  const students = [
    {
      id: 1,
      name: "Alice",
      math_marks: 85,
      physics_marks: 78,
      chemistry_marks: 90,
    },
    {
      id: 2,
      name: "Bob",
      math_marks: 78,
      physics_marks: 85,
      chemistry_marks: 88,
    },
    {
      id: 3,
      name: "Charlie",
      math_marks: 92,
      physics_marks: 90,
      chemistry_marks: 94,
    },
    {
      id: 4,
      name: "David",
      math_marks: 64,
      physics_marks: 72,
      chemistry_marks: 68,
    },
    {
      id: 5,
      name: "Eva",
      math_marks: 75,
      physics_marks: 80,
      chemistry_marks: 82,
    },
    {
      id: 6,
      name: "Frank",
      math_marks: 89,
      physics_marks: 88,
      chemistry_marks: 91,
    },
    {
      id: 7,
      name: "Grace",
      math_marks: 72,
      physics_marks: 75,
      chemistry_marks: 78,
    },
    {
      id: 8,
      name: "Harry",
      math_marks: 93,
      physics_marks: 95,
      chemistry_marks: 92,
    },
    {
      id: 9,
      name: "Ivy",
      math_marks: 80,
      physics_marks: 82,
      chemistry_marks: 85,
    },
    {
      id: 10,
      name: "Jack",
      math_marks: 88,
      physics_marks: 90,
      chemistry_marks: 89,
    },
  ];


    return (
      <div>
            <LChart width={800} height={400} data={students}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
          <Line dataKey="math_marks" stroke="yellow"></Line>
          <Line dataKey={"physics_marks"} stroke="red"></Line>
        </LChart>
      </div>
    );
};

export default LineChart;