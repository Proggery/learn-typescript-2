import { ReactElement } from "react";
import { ReactNode } from "react";

export interface HeadingProps {
  title: string;
}

// export function Heading({ title }: HeadingProps) {
//   return <h5>{title}</h5>;
// }

export const Heading = ({ title }: HeadingProps) => {
  return <h5>{title}</h5>;
};

// export function List<ListItem>({
//   items,
//   render,
// }: {
//   items: ListItem[];
//   render: (item: ListItem) => ReactNode;
// }) {
//   return (
//     <ul style={{ display: "flex" }}>
//       {items.map((item, index) => (
//         <li style={{ listStyle: "none", marginInline: 10 }} key={index}>
//           {render(item)}
//         </li>
//       ))}
//     </ul>
//   );
// }

export type ListComponent = <ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) => ReactElement;

export const List: ListComponent = ({ items, render }) => {
  return (
    <ul style={{ display: "flex" }}>
      {items.map((item, index) => (
        <li style={{ listStyle: "none", marginInline: 10 }} key={index}>
          {render(item)}
        </li>
      ))}
    </ul>
  );
};

function TestComponent() {
  return (
    <div>
      <Heading title="Helló!" />
      <List
        items={["Geri", "Nóri", "Kata"]}
        render={(str) => <strong>{str}</strong>}
      />
    </div>
  );
}

export default TestComponent;
