import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserShield,
  FaUsers,
  FaBook,
  FaBoxes,
  FaHandshake,
  FaMoneyBillWave,
  FaChartBar,
  FaCogs,
  FaSignOutAlt,
  FaBookReader,
  FaClipboardList,
  FaIdBadge,
  FaChevronDown,
} from "react-icons/fa";
import logo from "../logo.svg";

export default function Sidebar({ user }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const initials = (user?.username?.[0] || "u").toUpperCase();

  const displayName = user?.username || "User";
  const displayRole =
    ((user?.role || "")
      .replace(/[_-]+/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase())) || "Role";

  const isActivePath = (to) =>
    location.pathname === to || location.pathname.startsWith(to + "/");

  const MenuLink = ({ to, icon: Icon, label }) => {
    const active = isActivePath(to);
    return (
        <Link
        to={to}
        aria-current={active ? "page" : undefined}
        className={[
          "group relative flex items-center gap-3 px-2.5 py-1.5 rounded-md text-sm hover:text-gray-900",
          active
            ? "bg-blue-50 text-blue-600 font-semibold before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-5 before:w-px before:rounded before:bg-blue-600"
            : "",
        ].join(" ")}
      >
        {Icon ? (
          <Icon className={active ? "text-blue-600" : "text-gray-500"} />
        ) : null}
        <span>{label}</span>
      </Link>
    );
  };

  const ChildLink = ({ to, label }) => {
    const active = isActivePath(to);
    return (
        <Link
        to={to}
        aria-current={active ? "page" : undefined}
        className={`flex items-center px-2.5 py-1.5 rounded-md text-xs hover:text-gray-900 ${
          active ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-600"
        }`}
      >
        <span>{label}</span>
      </Link>
    );
  };

  const renderNavigation = () => {
    if (!user) return null;

    const isUserSection = location.pathname.startsWith("/superadmin/users");
    const isBooksSection =
      location.pathname.startsWith("/superadmin/books") ||
      location.pathname.startsWith("/superadmin/categories") ||
      location.pathname.startsWith("/superadmin/inventory");

    switch (user.role) {
      case "superadmin":
        return (
          <ul className="space-y-3 text-gray-700">
            <li>
              <MenuLink
                to="/dashboard"
                icon={FaTachometerAlt}
                label="Dashboard"
              />
            </li>

            <li>
              <details open={isUserSection}>
                <summary
                className={[
                    "relative flex items-center justify-between cursor-pointer px-2.5 py-1.5 rounded-md text-sm hover:text-gray-900",
                    isUserSection
                      ? "bg-blue-50 text-blue-600 font-semibold before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-5 before:w-px before:rounded before:bg-blue-600"
                      : "",
                  ].join(" ")}
                >
                  <span className="flex items-center gap-3">
                    <FaUserShield
                      className={
                        isUserSection ? "text-blue-600" : "text-gray-500"
                      }
                    />
                    <span>Users</span>
                  </span>
                  <FaChevronDown
                    aria-hidden="true"
                    className={`transition-transform ${
                      isUserSection ? "rotate-90 text-blue-600" : "text-gray-400"
                    }`}
                  />
                </summary>

                <ul className="relative ml-6 mt-2 space-y-2 pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gray-300">
                  <li>
                    <ChildLink
                      to="/superadmin/users/superadmins"
                      label="Superadmins"
                    />
                  </li>
                  <li>
                    <ChildLink
                      to="/superadmin/users/staff"
                      label="Library Staff"
                    />
                  </li>
                  <li>
                    <ChildLink
                      to="/superadmin/users/students"
                      label="Students"
                    />
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details open={isBooksSection}>
                <summary
                 className={[
                    "relative flex items-center justify-between cursor-pointer px-2.5 py-1.5 rounded-md text-sm hover:text-gray-900",
                    isBooksSection
                      ? "bg-blue-50 text-blue-600 font-semibold before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-5 before:w-px before:rounded before:bg-blue-600"
                      : "",
                  ].join(" ")}
                >
                  <span className="flex items-center gap-3">
                    <FaBook
                      className={
                        isBooksSection ? "text-blue-600" : "text-gray-500"
                      }
                    />
                    <span>Books</span>
                  </span>
                  <FaChevronDown
                    aria-hidden="true"
                    className={`transition-transform ${
                      isBooksSection ? "rotate-90 text-blue-600" : "text-gray-400"
                    }`}
                  />
                </summary>

                <ul className="relative ml-6 mt-2 space-y-2 pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gray-300">
                  <li>
                    <ChildLink to="/superadmin/books" label="Books" />
                  </li>
                  <li>
                    <ChildLink to="/superadmin/categories" label="Categories" />
                  </li>
                  <li>
                    <ChildLink to="/superadmin/inventory" label="Inventory" />
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <MenuLink
                to="/superadmin/loans"
                icon={FaHandshake}
                label="Loans Management"
              />
            </li>
            <li>
              <MenuLink
                to="/superadmin/fines"
                icon={FaMoneyBillWave}
                label="Fines & Payments"
              />
            </li>
            <li>
              <MenuLink
                to="/superadmin/reports"
                icon={FaChartBar}
                label="Reports"
              />
            </li>
            <li>
              <MenuLink
                to="/superadmin/settings"
                icon={FaCogs}
                label="Settings"
              />
            </li>
          </ul>
        );

      case "staff":
        return (
          <ul className="space-y-3 text-gray-700">
            <li>
              <MenuLink
                to="/dashboard"
                icon={FaTachometerAlt}
                label="Dashboard"
              />
            </li>
            <li>
              <MenuLink to="/staff/books" icon={FaBookReader} label="Books" />
            </li>
            <li>
              <MenuLink
                to="/staff/loans"
                icon={FaHandshake}
                label="Loans & Returns"
              />
            </li>
            <li>
              <MenuLink
                to="/staff/students"
                icon={FaUsers}
                label="Students"
              />
            </li>
            <li>
              <MenuLink
                to="/staff/inventory"
                icon={FaBoxes}
                label="Inventory"
              />
            </li>
            <li>
              <MenuLink
                to="/staff/reports"
                icon={FaChartBar}
                label="Reports"
              />
            </li>
          </ul>
        );

      case "student":
        return (
          <ul className="space-y-3 text-gray-700">
            <li>
              <MenuLink
                to="/dashboard"
                icon={FaTachometerAlt}
                label="Dashboard"
              />
            </li>
            <li>
              <MenuLink
                to="/student/books"
                icon={FaBookReader}
                label="Browse Books"
              />
            </li>
            <li>
              <MenuLink
                to="/student/loans"
                icon={FaClipboardList}
                label="My Loans"
              />
            </li>
            <li>
              <MenuLink
                to="/student/fines"
                icon={FaMoneyBillWave}
                label="My Fines"
              />
            </li>
            <li>
              <MenuLink
                to="/student/profile"
                icon={FaIdBadge}
                label="Profile"
              />
            </li>
          </ul>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-slate-50 border border-gray-300 rounded shadow"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <aside
  className={`relative fixed top-0 left-0 min-h-screen w-64 bg-slate-50 text-gray-800 pt-8 px-8 pb-20
  transform transition-transform duration-300 shadow
  ${open ? "translate-x-0" : "-translate-x-full"}
  md:translate-x-0 md:static md:block
  flex flex-col`}
>
        <div className="mb-4 pb-4 border-b border-gray-200 flex items-center gap-3">
        <img src={logo} alt="E-Lib" className="h-8 w-8" />
        <span className="text-lg font-bold text-blue-600">e ‑ lib</span>
        </div>

        <nav className="flex-1">{renderNavigation()}</nav>

<div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-slate-50">
  <div className="flex items-center justify-between px-8 py-3">
    <Link to="/profile" className="flex items-center gap-3 hover:text-gray-900">
      <div className="h-8 w-8 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center text-sm font-semibold">
        {initials}
      </div>
      <div className="flex flex-col leading-tight">
        <span className="font-medium text-gray-900">{displayName}</span>
        <span className="text-xs text-gray-500">{displayRole}</span>
      </div>
    </Link>
    <Link to="/logout" aria-label="Logout" className="text-red-600 hover:text-red-700">
      <FaSignOutAlt />
    </Link>
  </div>
</div>
      </aside>
    </>
  );
}