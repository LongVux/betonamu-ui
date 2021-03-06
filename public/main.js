const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../src/content")
let postlist = []

const getPosts = () => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log("Failed to list contents of directory: " + err)
    }
    files.forEach((file, i) => {
      let obj = {}
      let post
      fs.readFile(`${dirPath}/${file}`, 'utf8', (err, contents) => {
        const getMetaDataIndices = (acc, elem, i) => {
          if(/^---/.test(elem)) {
            acc.push(i)
          }
          return acc
        }
        const parseMetaData = ({lines, metadataIndices}) => {
          if (metadataIndices.length > 0) {
            let metadata = lines.slice(
              metadataIndices[0] + 1,
              metadataIndices[1]
            )
            metadata.forEach(line => {
              obj[line.split(": ")[0]] = line.split(": ")[1]
            })
            return obj
          }
        }
        const parseContent = ({lines, metadataIndices}) => {
          if (metadataIndices.length > 0) {
            lines = lines.slice(
              metadataIndices[1] + 1,
              lines.length
            )
            return lines.join("\n")
          }
        }
        const lines = contents.split("\n")
        const metadataIndices = lines.reduce(getMetaDataIndices, [])
        const metadata = parseMetaData({lines, metadataIndices})
        const content = parseContent({lines, metadataIndices});
        post = {
          id: i + 1,
          title: metadata.title ? metadata.title : "No title given",
          description: metadata.description ? metadata.description : "No description given",
          author: metadata.author ? metadata.author : "No author given",
          date: metadata.date ? metadata.date : "No date given",
          tag: metadata.tag? metadata.tag.split(",") : ["no tag given"],
          level: metadata.level? metadata.level : "no level given",
          content: content ? content : "No content given"
        }
        postlist.push(post)
        if (i === files.length - 1) {
          let data = JSON.stringify(postlist)
          fs.writeFileSync("src/posts.json", data)
        }
      })
    })
  })
  return; 
}

getPosts();