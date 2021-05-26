var enforce = "{{ site.enforce_ssl }}";
if ((enforce == window.location.host) && (window.location.protocol != "https:"))
  window.location = window.location.toString().replace(/^http:/, "https:");