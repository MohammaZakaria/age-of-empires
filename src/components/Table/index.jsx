import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import { COLUMNS } from "../../components/Table/Columns";
import { PAGE_SIZES } from "../../utils/vars";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import "./style.scss";
import { Col } from "react-bootstrap";

const Table = () => {
  const navigate = useNavigate();
  const { empires } = useSelector((state) => state.empires);
  const data = useMemo(() => empires, [empires]);
  const columns = useMemo(() => COLUMNS, []);

  const navigateToPage = (arr) => {
    // get row object as array and select the "id" cell
    const [cell] = arr;
    navigate(`/units/${cell.value}`);
  };
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    nextPage,
    canNextPage,
    canPreviousPage,
    previousPage,
    footerGroups,
    page,
    pageOptions,
    state,
    prepareRow,
    gotoPage,
    pageCount,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  const { pageIndex, pageSize } = state;
  return (
    <>
      {empires.length > 0 ? (
        <>
          <table className="public__table__design" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    className="table__row"
                    onClick={() => navigateToPage(row.cells)}
                    {...row.getRowProps()}
                  >
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              {footerGroups.map((footerGroup) => (
                <tr {...footerGroup.getFooterGroupProps()}>
                  {footerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Footer")}
                    </th>
                  ))}
                </tr>
              ))}
            </tfoot>
          </table>
          <div className="pagination__wrapper">
            <select
              className="pagination__rows__count"
              onChange={(e) => setPageSize(Number(e.target.value))}
              value={pageSize}
            >
              {PAGE_SIZES.map((size) => (
                <option value={size}>{size}</option>
              ))}
            </select>
            <div className="align-items-center pagination__bar">
              <button
                disabled={!canPreviousPage}
                onClick={() => gotoPage(0)}
                className={`pagination__button ${canPreviousPage && "active"}`}
              >
                <Icon.ChevronDoubleLeft
                  color={canPreviousPage ? "#fff" : "#555555"}
                />
              </button>
              <button
                disabled={!canPreviousPage}
                onClick={() => previousPage()}
                className={`pagination__button ${canPreviousPage && "active"}`}
              >
                <Icon.ChevronLeft
                  color={canPreviousPage ? "#fff" : "#555555"}
                />
              </button>
              <div>
                <p>
                  <span>
                    <strong> {pageIndex + 1} </strong> of {pageOptions.length}
                  </span>
                </p>
              </div>
              <button
                disabled={!canNextPage}
                onClick={() => nextPage()}
                className={`pagination__button ${canNextPage && "active"}`}
              >
                <Icon.ChevronRight color={canNextPage ? "#fff" : "#555555"} />
              </button>
              <button
                disabled={!canNextPage}
                onClick={() => gotoPage(pageCount - 1)}
                className={`pagination__button ${canNextPage && "active"}`}
              >
                <Icon.ChevronDoubleRight
                  color={canNextPage ? "#fff" : "#555555"}
                />
              </button>
            </div>
          </div>
        </>
      ) : (
        <Col lg={5} sm={12}>
          <h3 className="not__found__message">
            No units excited with this conditions. or there is a problem with
            fetching process please try again
          </h3>
        </Col>
      )}
    </>
  );
};

export default Table;
