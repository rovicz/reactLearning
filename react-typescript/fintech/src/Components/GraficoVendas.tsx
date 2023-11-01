import {
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  Line,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { IVenda } from "../Context/DataContext";

const dadosGrafico = [
  {
    data: "2023-05-03",
    pago: 3000,
    processando: 3000,
    falha: 2000,
  },
  {
    data: "2023-05-04",
    pago: 34000,
    processando: 5000,
    falha: 6000,
  },
  {
    data: "2023-05-05",
    pago: 20000,
    processando: 5000,
    falha: 6000,
  },
];

const GraficoVendas = ({ data }: { data: IVenda[] }) => {
  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart
        data={dadosGrafico}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#A36AF9" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#FBCB21"
          strokeWidth={3}
        />
        <Line type="monotone" dataKey="falha" stroke="#000" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraficoVendas;
