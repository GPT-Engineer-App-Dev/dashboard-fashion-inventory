import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table.jsx";
import { Package, Tag, MapPin, AlertCircle, Bell, Download, Filter, LayoutGrid, MapPinIcon, Package2 } from "lucide-react";
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
      <header className="flex items-center justify-between h-16 px-4 border-b bg-gray-100/40 dark:bg-gray-800/40">
        <a className="flex items-center gap-2" href="#">
          <Package2 className="h-6 w-6" />
          <span className="text-lg font-semibold">Acme Fashion</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
            Dashboard
          </a>
          <a className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
            Inventory
          </a>
          <a className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
            Orders
          </a>
          <a className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
            Suppliers
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="rounded-full" size="icon" variant="ghost">
            <img
              alt="Avatar"
              className="rounded-full"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="grid gap-8 p-4 md:p-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Total Items</CardTitle>
              <Package className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">245</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">+5.2% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Items by Category</CardTitle>
              <LayoutGrid className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">3 Categories</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Apparel, Accessories, Footwear</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Items by Location</CardTitle>
              <MapPin className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">3 Locations</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Warehouse A, Warehouse B, Warehouse C</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Reorder Alerts</CardTitle>
              <Bell className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">2</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Items below reorder threshold</p>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Inventory Overview</CardTitle>
              <div className="flex items-center gap-4">
                <Button size="sm" variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}

export default App;
