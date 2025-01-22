import SortableTable from "../components/SortableTable";
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

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };
  return <SortableTable config={config} data={data} keyFn={keyFn} />;
}

export default TablePage;
