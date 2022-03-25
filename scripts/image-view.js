function installImageView(src, caption) {
    $("#imageViewerCaption").html(caption);
    $("#imageViewerImage").attr("src", src);
    $("#imageViewer").modal("show");
}