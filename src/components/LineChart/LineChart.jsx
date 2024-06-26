import { CartesianGrid, LineChart as LChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const subjectsMarksData = [
        { id: 1, name: "Alice", mathMarks: 85, physicsMarks: 78, chemistryMarks: 82 },
        { id: 2, name: "Bob", mathMarks: 78, physicsMarks: 85, chemistryMarks: 79 },
        { id: 3, name: "Charlie", mathMarks: 92, physicsMarks: 88, chemistryMarks: 91 },
        { id: 4, name: "David", mathMarks: 74, physicsMarks: 72, chemistryMarks: 75 },
        { id: 5, name: "Ella", mathMarks: 88, physicsMarks: 90, chemistryMarks: 87 },
        { id: 6, name: "Frank", mathMarks: 81, physicsMarks: 76, chemistryMarks: 80 },
        { id: 7, name: "Grace", mathMarks: 95, physicsMarks: 94, chemistryMarks: 93 },
        { id: 8, name: "Hank", mathMarks: 69, physicsMarks: 65, chemistryMarks: 70 },
        { id: 9, name: "Ivy", mathMarks: 76, physicsMarks: 82, chemistryMarks: 78 },
        { id: 10, name: "Jack", mathMarks: 84, physicsMarks: 80, chemistryMarks: 86 },

    ];

    return (
        <div>
            <LChart width={800} height={400} data={subjectsMarksData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="mathMarks" stroke="red" />
                <Line type="monotone" dataKey="physicsMarks" stroke="#FFFF00" />
                <Line type="monotone" dataKey="chemistryMarks" stroke="#355E3B" />
            </LChart>
        </div>
    );
};

export default LineChart;