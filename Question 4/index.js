// Safehands has clients who sell in US, UK, Canada, China and
// Ghana. We want to quote prices in the respective currencies
// of the countries. Our base currency is GHS.
// • Create a currency converter module that will be used to
// convert the price from GHS to the respective currencies
// before they are posted to the online stores.
// • These are the standing rates
// –
// –
// –
// –
// 1 USD = 0,73 GBP
// 1 USD = 1,26 CAD
// 1 USD = 6,46 CNY
// 1 USD = 6,05 GHS

const currencyConverter = (amount) => {
  const USD = 6.05;
  const GBP = 0.73;
  const CNY = 6.46;
  const CAD = 1.26;
  const ghs_to_usd = amount * USD;
  const ghs_to_gbp = ghs_to_usd * GBP;
  const ghs_to_cny = ghs_to_usd * CNY;
  const ghs_to_cad = ghs_to_usd * CAD;

  console.log(`🇺🇸 ${ghs_to_usd}, 🇬🇧 ${ghs_to_gbp}, 🇨🇳 ${ghs_to_cny}, 🇨🇦 ${ghs_to_cad}`);
};

currencyConverter(50);
