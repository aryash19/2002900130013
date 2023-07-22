
const generate = async () => {
  const res = await fetch("http://20.244.56.144/train/auth", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      
        "companyName": "Aryash Train Service",
        "clientID": "1210db68-7234-4b8b-a904-86d00208759a",
        "clientSecret": "DngRcOXzuFeEzgsG",
        "ownerName": "Aryash",
        "ownerEmail": "aryash2020it028@abesit.edu.in",
        "rollNo": "20002900130013"
    
    }),
  });
  const json = await res.json();
  return json
};

module.exports = generate;
