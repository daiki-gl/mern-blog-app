export const constant = {
    MAX_FILE_SIZE : 5242880,
    ACCEPTED_IMAGE_TYPES : ["image/jpeg", "image/jpg", "image/png", "image/webp"],
    MODULES : {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      },
      FORMATS: [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ],
}