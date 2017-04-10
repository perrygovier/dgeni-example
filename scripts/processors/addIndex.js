module.exports = function addIndex(renderDocsProcessor) {
  return {
    name: 'add-index',
    description: 'Create index page',
    $runAfter: ['paths-computed'],
    $runBefore: ['rendering-docs'],
    $process: function(docs) {

      docs.forEach(function(doc, i) {
        console.log('processing ' + doc.id);
        // console.log(doc)
      });

      docs.push({
        docType: 'index',
        id: 'index',
        template: 'index.template.html',
        outputPath: 'index.html',
        codeName: 'index'
      });

      // returning docs will replace docs object in the next process
      return docs;
    }
  };
};
