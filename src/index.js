import PSPDFKit from "pspdfkit";

PSPDFKit.load({
  baseUrl: `${location.origin}/`,
  container: "#container",
  document: "./example.pdf",
}).then(() => {
  console.log("PSPDFKit loaded!");
  console.log("API docs: https://pspdfkit.com/api/web/");
  console.log("Guides: https://pspdfkit.com/guides/web/");
});
