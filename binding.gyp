{
  "targets": [
    {
      "target_name": "fast-case",
      "sources": [
        "src/fast-case.cc",
      ],
      "include_dirs": ["<!(node -e \"require('nan')\")"]
    }
  ]
}
