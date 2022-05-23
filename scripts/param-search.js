function searchParam(paramName, callback) {
    var $ = new URL(window.location.href).searchParams.get(paramName);

    if($) callback($);
}