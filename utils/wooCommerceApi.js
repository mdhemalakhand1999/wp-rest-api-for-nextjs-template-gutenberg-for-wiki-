import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
const api = new WooCommerceRestApi({
    url: "http://localhost/wp/gutenberg-for-wiki",
    consumerKey: "ck_07bb1798716ae86dc34a4e4f4a3f0851e1441f14",
    consumerSecret: "cs_cc12e85b30a9bdf2b9e4fb68a5c83900e4252364",
    version: "wc/v3",
    axiosConfig: {
        headers: {}
      }
});
export default api;
