interface PdfViewerProps {
    url: string;
}

export default function PdfViewer({ url }: PdfViewerProps) {
    return (
        <iframe
            src={url}
            className="w-full h-[80vh]"
            title="PDF Viewer"
        />
    );
}