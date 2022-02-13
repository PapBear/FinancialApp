// Variable

var globalIncomeData = []

var globalExpensesData = []

var globalUserInfo = {
  "name": "PapaBear",
  "balance": 12500000,
  "dob": "03-03-1998"
}

let globalRoute = "tes"

// Function

function setGlobalIncomeData() {
  globalIncomeData = [
    {
      "date": "1Jan2022",
      "description": "Payment Refund From Gojek",
      "source": "Gojek",
      "amount": "500000"
    },
    {
      "date": "2Jan2022",
      "description": "Transferan Hutang dari Teman",
      "source": "Bank",
      "amount": "300000"
    },
    {
      "date": "4Jan2022",
      "description": "Hasil Jualan Toko",
      "source": "Gojek",
      "amount": "500000"
    },
    {
      "date": "6Jan2022",
      "description": "Gaji Masuk",
      "source": "Bank",
      "amount": "3000000"
    },
    {
      "date": "10Jan2022",
      "description": "Refund Pulsa",
      "source": "OVO",
      "amount": "200000"
    },
    {
      "date": "22Jan2022",
      "description": "Payment Refund From Gojek",
      "source": "Gojek",
      "amount": "100000"
    }
  ]
  localStorage.setItem("globalIncomeData", JSON.stringify(globalIncomeData))
}

function setGlobalExpensesData() {
  globalExpensesData = [
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
  localStorage.setItem("globalExpensesData", JSON.stringify(globalExpensesData))
}

function setGlobalRoute() {
  localStorage.setItem("globalRoute", globalRoute)
}

function resetRoute() {
  route = ""
  setGlobalRoute()
}

