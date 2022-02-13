// Variable

var globalIncomeData = [
  {
    "date": "2022-01-01",
    "description": "Payment Refund From Gojek",
    "source": "Gojek",
    "amount": "500000"
  },
  {
    "date": "2022-01-02",
    "description": "Transferan Hutang dari Teman",
    "source": "Bank",
    "amount": "300000"
  },
  {
    "date": "2022-01-04",
    "description": "Hasil Jualan Toko",
    "source": "Gojek",
    "amount": "500000"
  },
  {
    "date": "2022-01-06",
    "description": "Gaji Masuk",
    "source": "Bank",
    "amount": "3000000"
  },
  {
    "date": "2022-01-10",
    "description": "Refund Pulsa",
    "source": "OVO",
    "amount": "200000"
  },
  {
    "date": "2022-01-22",
    "description": "Payment Refund From Gojek",
    "source": "Gojek",
    "amount": "100000"
  }
]

var globalExpensesData = [
  {
    "date": "21Jan2022",
    "description": "Bayar Tagihan Listrik",
    "source": "Gojek",
    "amount": "250000"
  },
  {
    "date": "2Feb2022",
    "description": "Top up OVO",
    "source": "M-Banking",
    "amount": "300000"
  },
  {
    "date": "5Feb2022",
    "description": "Top up GOJEK",
    "source": "Gojek",
    "amount": "300000"
  },
  {
    "date": "10Feb2022",
    "description": "Beli Pulsa",
    "source": "OVO",
    "amount": "100000"
  },
]

var globalUserInfo = {
  "name": "PapaBear",
  "balance": 12500000,
  "dob": "03-03-1998"
}

var globalRoute = ""
var watchIncomeTable = false
var watchExpenseTable = false
var initialLoad = "true"

// Function

function setInitialData() {
  localStorage.setItem("initialLoad", initialLoad)
  if(JSON.parse(localStorage.initialLoad) == true) {
    setGlobalIncomeData()
    setGlobalExpensesData()
    setGlobalUserInfo()
    localStorage.setItem("initialLoad", false)
  }
}

function setGlobalIncomeData() {
  localStorage.setItem("globalIncomeData", JSON.stringify(globalIncomeData))
}

function setGlobalExpensesData() {
  localStorage.setItem("globalExpensesData", JSON.stringify(globalExpensesData))
}

function setGlobalUserInfo() {
  localStorage.setItem("globalUserInfo", JSON.stringify(globalUserInfo))
}

function setGlobalRoute() {
  localStorage.setItem("globalRoute", globalRoute)
}

function setIncomeTableWatcher() {
  localStorage.setItem("watchIncomeTable", watchIncomeTable)
}

function setExpenseTableWatcher() {
  localStorage.setItem("watchExpenseTable", watchExpenseTable)
}

function setInitialLoad() {
  localStorage.setItem("initialLoad", initialLoad)
}

function resetRoute() {
  route = ""
  setGlobalRoute()
}

