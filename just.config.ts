// ES Module style
import { task, logger, argv } from 'just-scripts';
import rimraf from "rimraf"

task('clean', 'Delete all node_modules folders in the repo.', function() {
  rimraf('node_modules', (error) => {throw error})
});