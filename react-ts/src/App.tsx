/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, useState } from "react";

type ProductT = {
  category: string, price: string, stocked: boolean, name: string
}
const products: ProductT[] = [
  {
    category: "Fruits", price: "$1", stocked: true, name: "Apple"
  },
  {
    category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"
  },
  {
    category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"
  },
  {
    category: "Vegetables", price: "$2", stocked: true, name: "Spinach"
  },
  {
    category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"
  },
  {
    category: "Vegetables", price: "$1", stocked: true, name: "Peas"
  }
]


function ProductCategoryRow({ category }: { category: string }) {
  return (
    <tr>
      <th colSpan={2}>
        {category}
      </th>
    </tr>
  );
}
function ProductRow({ product }: { product: ProductT }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
function ProductTable({ products, filterText, inStockOnly }: { products: ProductT[], filterText: string, inStockOnly: boolean }) {
  const rows: ReactNode[] = [];
  let lastCategory: string | null = null;

  products.forEach((product) => {
    const check1 = product.name.toLowerCase().indexOf(
      filterText.toLowerCase()
    )
    const check2 = inStockOnly && !product.stocked
    if (
      check1 === -1
    ) {
      return;
    }
    if (check2) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }: { filterText: string, inStockOnly: boolean, onFilterTextChange: React.Dispatch<React.SetStateAction<string>>, onInStockOnlyChange: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

function FilterableProductTable({ products }: { products: ProductT[] }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div>
      <   SearchBar filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable filterText={filterText}
        inStockOnly={inStockOnly} products={products} />
    </div>
  );
}

function App() {


  return (
    <FilterableProductTable products={products} />
  )
}

export default App
