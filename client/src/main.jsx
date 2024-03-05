import ReactDOM from "react-dom/client";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Koleksi from "./pages/Koleksi";
import Account from "./pages/Account";
import Verification from "./pages/Verfication";
import Edit from "./pages/Edit";
import ViewBook from "./pages/ViewBook";
import AdminLayout from "./components/AdminLayout";
import Laporan from "./pages/Laporan";
import Buku from "./pages/Buku";
import AddBook from "./pages/AddBook";
import Users from "./pages/Users";
import UsersBanned from "./pages/UsersBanned";
import Peminjaman from "./pages/Peminjaman";
import Pengembalian from "./pages/Pengembalian";
import Petugas from "./pages/Petugas";
import EditBook from "./pages/EditBook";
import ViewUser from "./pages/ViewUser";
import Lokasi from "./pages/Lokasi";
import AddLokasi from "./pages/AddLokasi";
import Kategori from "./pages/Kategori";
import AddKategori from "./pages/AddKategori";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "kategori",
        element: <Home />,
      },
      {
        path: "",
        element: <Login />,
      },
      {
        path: "daftar",
        element: <Register />,
      },
      {
        path: "koleksi",
        element: <Koleksi />,
      },
      {
        path: "akun",
        element: <Account />,
      },
      {
        path: "verifikasi",
        element: <Verification />,
      },
      {
        path: "edit",
        element: <Edit />,
      },
      {
        path: "lihat/:id",
        element: <ViewBook />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "laporan",
        element: <Laporan />,
      },
      {
        path: "buku",
        element: <Outlet />,
        children: [
          {
            path: "",
            element: <Buku />,
          },
          {
            path: "tambah",
            element: <AddBook />,
          },
          {
            path: "edit/:id",
            element: <EditBook />,
          },
        ],
      },
      {
        path: "pengguna",
        element: <Outlet />,
        children: [
          {
            path: "",
            element: <Users />,
          },
          {
            path: "banned",
            element: <UsersBanned />,
          },
          {
            path: "lihat/:id",
            element: <ViewUser />,
          },
        ],
      },
      {
        path: "peminjaman",
        element: <Peminjaman />,
      },
      {
        path: "pengembalian",
        element: <Pengembalian />,
      },
      {
        path: "petugas",
        element: <Petugas />,
      },
      {
        path: "kategori",
        element: <Outlet />,
        children: [
          {
            path: "",
            element: <Kategori />,
          },
          {
            path: "tambah",
            element: <AddKategori />,
          },
        ],
      },
      {
        path: "lokasi",
        element: <Outlet />,
        children: [
          {
            path: "",
            element: <Lokasi />,
          },
          {
            path: "tambah",
            element: <AddLokasi />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
