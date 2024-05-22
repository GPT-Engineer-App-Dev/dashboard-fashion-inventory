import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table.jsx";
import { Package, Tag, MapPin, AlertCircle } from "lucide-react";
import "./App.css";

function App() {
  const [items] = useState([
    { item: "T-Shirt", sku: "TS123", quantity: 100, location: "Warehouse A", lastUpdated: "2023-10-01" },
    { item: "Jeans", sku: "JN456", quantity: 50, location: "Warehouse B", lastUpdated: "2023-10-02" },
    { item: "Jacket", sku: "JK789", quantity: 20, location: "Warehouse A", lastUpdated: "2023-10-03" },
    { item: "Sneakers", sku: "SN012", quantity: 75, location: "Warehouse C", lastUpdated: "2023-10-04" },
  ]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Items</CardTitle>
          </CardHeader>
          <CardContent>
            <p>245</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Items by Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Apparel: 150</p>
            <p>Footwear: 75</p>
            <p>Accessories: 20</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Items by Location</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Warehouse A: 120</p>
            <p>Warehouse B: 50</p>
            <p>Warehouse C: 75</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Reorder Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Jacket: 20</p>
            <p>Sneakers: 75</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between mb-4">
        <Button>Filter</Button>
        <Button>Export</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Last Updated</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.item}</TableCell>
              <TableCell>{item.sku}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.location}</TableCell>
              <TableCell>{item.lastUpdated}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default App;
