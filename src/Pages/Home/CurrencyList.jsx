import React, { useEffect, useMemo, useState } from "react";
import as from "./CurrencyList.module.css";
import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { useGetTopTokenListMutation } from "../../services/api/tokenListing";
import { useDispatch, useSelector } from "react-redux";
import { setTokenList } from "../../services/slice/topCoinsSlice";

// import { btcb_, volume_ } from '../../App';
// cellRenderer
const SimpleComp = (p) => {
  return (
    <>
      {" "}
      <img style={{ width: "1rem" }} src={p.value}></img>
    </>
  );
};

const CurrencyList = () => {

  const [rowData, setRowData] = useState([]);

  const [colDefs, setColDefs] = useState([
    // { , field: "Name" },
    // { field : "Name"  },
    { field: "#",width:"60"  },
    { field: " ", cellRenderer: SimpleComp,width:"70"},
    { field: "Coin",width:"180" }, //change field value as your header value
    // { cellRenderer: SimpleComp , field: "firstName" },  //change field value as your header value
    { field: "Price",width:"250" }, //change field value as your header value
    { field: "24h",width:"250" }, //change field value as your header value
    { field: "Market Cap",width:"400" }, //change field value as your header value
  ]);

  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(100);

  const tokenList = useSelector(
    (state) => state.TopCoinsSlice.top100_CoinsList
  );

  const defaultColDef = useMemo(() => ({
    resizable: true,
    // flex: 1,
  }));

  const dispatch = useDispatch();
  const gridOptions = {
    sortable:true,
    pagination: true,
    paginationAutoPageSize : true
    ,
    paginationPageSize: 10,
  

    // onPaginationChanged: (event) => {
    //   setPageNumber(event.api.paginationGetCurrentPage() + 1);
    //   setPageSize(event.api.paginationGetPageSize());
    // },
  };

  const [getTopTokenList, { }] = useGetTopTokenListMutation();

  const fetchListHandler = async () => {
    try {
      const { data } = await getTopTokenList();
      if (data.length) {
        dispatch(setTokenList(data));
        handleRowData(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleRowData();
  }, [pageNumber, pageSize]);

  const handleRowData = (data = tokenList) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = data.slice(startIndex, endIndex);

    setRowData(() => {
      return currentData?.map((item) => {
        const {
          market_cap_rank = 0,
          name = "",
          current_price = 0,
          high_24h = 0,
          market_cap = 0,
          image = "",
        } = item;
        return {
          "#": market_cap_rank,
          " ": image,
          Coin: name,
          Price: parseInt(current_price).toFixed(2),
          "24h": parseInt(high_24h).toFixed(2),
          "Market Cap": parseInt(market_cap).toFixed(2),
        };
      });
    });
  };

  useEffect(() => {
    if (tokenList.length < 1) fetchListHandler();
  }, []);

  return (
    // Container
<div  className={`${as.divLand2Cont} `}  >

<h1  className={`${as.ourSwap} text-uppercase`}   >Crypto Curreincies</h1>


<div className={`${as.Landing2Cont} `}>




{/* The AG Grid component */}
<div className={`${as.tablecont}   ag-theme-quartz-dark `}>
  <AgGridReact
    columnDefs={colDefs}
    rowData={rowData}
    gridOptions={gridOptions}
    defaultColDef={defaultColDef}
  />
</div>
</div>
</div>
  );
};

export default CurrencyList;
