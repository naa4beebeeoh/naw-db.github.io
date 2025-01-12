import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { Stack, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import React from "react";
import { useFilters, usePagination, useSortBy, useTable } from "react-table";

import { ScrollableTable } from "src/components/common/Table";

export function BaseTable({ theme, columns, defaultPageSize, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageSize: defaultPageSize
      }
    },
    useFilters,
    useSortBy,
    usePagination
  );

  function updatePage(event, page) {
    gotoPage(page);
  }

  return (
    <TableContainer>
      <ScrollableTable {...getTableProps()} stickyHeader size="small">
        <TableHead>
          {headerGroups.map(
            headerGroup => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(
                  column => (
                    <TableCell
                      {...column.getHeaderProps()}
                      align="center"
                      width={column.width}
                      sx={{
                        fontWeight: "bold",
                        left: column.sticky ? 0 : undefined,
                        position: column.sticky ? "sticky" : undefined,
                        textAlign: column.textAlign ? column.textAlign : "center",
                        whiteSpace: "nowrap",
                        backgroundColor: column.backgroundColor
                          ? column.backgroundColor
                          : undefined,
                        zIndex: column.sticky ? theme.zIndex.appBar + 2 : undefined
                      }}
                    >
                      <div {...column.getSortByToggleProps()}>
                        <span>
                          {
                            column.showSortLabel
                              ? column.isSorted
                                ? (column.isSortedDesc ? <ArrowDownwardIcon fontSize="small" /> : <ArrowUpwardIcon fontSize="small" />)
                                : <SwapVertIcon fontSize="small" />
                              : null
                          }
                        </span>
                        <div>{column.showHeader ? column.render("Header") : null}</div>
                        <div>{column.canFilter ? column.render("Filter") : null}</div>
                      </div>
                    </TableCell>
                  ))}
              </TableRow>
            )
          )}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map(
            (row, i) => {
              prepareRow(row)
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map(
                    cell => {
                      return <TableCell
                        {...cell.getCellProps()}
                        sx={{
                          left: cell.column.sticky ? 0 : undefined,
                          position: cell.column.sticky ? "sticky" : undefined,
                          textAlign: cell.column.textAlign ? cell.column.textAlign : "center",
                          whiteSpace: "nowrap",
                          backgroundColor: cell.column.backgroundColor
                            ? cell.column.backgroundColor
                            : undefined
                        }}
                      >
                        {cell.render("Cell")}
                      </TableCell>;
                    }
                  )}
                </TableRow>
              );
            }
          )}
        </TableBody>
      </ScrollableTable>
      <Stack spacing={2}>
        <TablePagination
          component="div"
          count={rows.length}
          labelRowsPerPage="Rows"
          rowsPerPage={pageSize}
          page={pageIndex}
          showFirstButton
          showLastButton
          onPageChange={updatePage}
          onRowsPerPageChange={e => setPageSize(Number(e.target.value))}
        />
      </Stack>
    </TableContainer>
  );
}
