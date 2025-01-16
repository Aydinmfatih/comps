import Table from "../components/Table";

function TablePage() {
  const data = [
    {
      name: "Orange",
      color: "bg-orange-500",
      score: 10,
    },
    {
      name: "Apple",
      color: "bg-red-500",
      score: 9,
    },
    {
      name: "Banana",
      color: "bg-yellow-500",
      score: 2,
    },
    {
      name: "Grapes",
      color: "bg-purple-500",
      score: 7,
    },
  ];

  const config = [{ label: "Name" }, { label: "Color" }, { label: "Score" }];
  return <Table config={config} data={data} />;
}

export default TablePage;
