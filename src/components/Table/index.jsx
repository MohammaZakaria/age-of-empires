import React, { useMemo } from "react";
import { useTable, usePagination, useSortBy } from "react-table";
import { COLUMNS } from "../../components/Table/Columns";
import { PAGE_SIZES } from "../../utils/vars";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import "./style.scss";
import { Col, Row } from "react-bootstrap";

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
    useSortBy,
    usePagination
  );

  const { pageIndex, pageSize } = state;

  const pagination = [
    {
      isDisabled: canPreviousPage,
      handelClick: () => gotoPage(0),
      icon: (
        <Icon.ChevronDoubleLeft color={canPreviousPage ? "#fff" : "#555555"} />
      ),
    },
    {
      isDisabled: canPreviousPage,
      handelClick: () => previousPage(),
      icon: <Icon.ChevronLeft color={canPreviousPage ? "#fff" : "#555555"} />,
    },
    {
      isDisabled: canNextPage,
      handelClick: () => nextPage(),
      icon: <Icon.ChevronRight color={canNextPage ? "#fff" : "#555555"} />,
    },
    {
      isDisabled: canNextPage,
      handelClick: () => gotoPage(pageCount - 1),
      icon: (
        <Icon.ChevronDoubleRight color={canNextPage ? "#fff" : "#555555"} />
      ),
    },
  ];
  return (
    <>
      {empires.length > 0 ? (
        <>
          <table className="public__table__design" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      <Row className="flex align-items-center justify-between">
                        <Col>
                          <span>{column.render("Header")}</span>
                        </Col>

                        <Col style={{ textAlign: "right" }}>
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <Icon.SortDown color={"#fff"} />
                            ) : (
                              <Icon.SortUp color={"#fff"} />
                            )
                          ) : (
                            <Icon.Filter color={"#fff"} />
                          )}
                        </Col>
                      </Row>
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
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <div className="align-items-center pagination__bar">
              {pagination &&
                pagination.map((page, index) => (
                  <React.Fragment key={index}>
                    <button
                      disabled={!page.isDisabled}
                      onClick={() => page.handelClick()}
                      className={`pagination__button ${
                        page.isDisabled && "active"
                      }`}
                    >
                      {page.icon}
                    </button>
                    {index === 1 && (
                      <div>
                        <p>
                          <span>
                            <strong> {pageIndex + 1} </strong> of{" "}
                            {pageOptions.length}
                          </span>
                        </p>
                      </div>
                    )}
                  </React.Fragment>
                ))}
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
