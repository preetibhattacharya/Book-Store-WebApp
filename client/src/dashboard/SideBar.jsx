import React from 'react';
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { FaBookOpen } from "react-icons/fa6";
import './Sidebar.css'; 

const SideBar = () => {
  return (
    <div className="bg-gray-200 p-4">
      <Sidebar aria-label="Sidebar with content separator example" className='sidebar-custom py-4'>
        <Sidebar.Logo className="sidebar-logo 2xl">
          <FaBookOpen className="inline-block text-2xl" />
          <span className='font-bold text-2xl'>The Book<br/>Emporium </span>
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className="sidebar-item py-2 text-lg">
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload} className="sidebar-item py-2 text-lg">
              Upload Books
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox} className="sidebar-item py-2 text-lg">
              Manage Books
            </Sidebar.Item>
            <Sidebar.Item href="" icon={HiUser} className="sidebar-item py-2 text-lg">
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag} className="sidebar-item py-2 text-lg">
              Products
            </Sidebar.Item>
            <Sidebar.Item href="/login" icon={HiArrowSmRight} className="sidebar-item py-2 text-lg">
              Log In
            </Sidebar.Item>
            <Sidebar.Item href="/logout" icon={HiTable} className="sidebar-item py-2 text-lg">
              Log Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup className='gap-8 mb-4'>
            <Sidebar.Item href="#" icon={HiChartPie} className="sidebar-item py-2 text-lg">
              Upgrade to Pro
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards} className="sidebar-item py-2 text-lg">
              Documentation
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiBuoy} className="sidebar-item py-2 text-lg">
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  )
}

export default SideBar;
