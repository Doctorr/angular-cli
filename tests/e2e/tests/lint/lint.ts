import { ng } from '../../utils/process';
import { oneLine } from 'common-tags';

export default function () {
  // TODO(architect): reenable, validate, then delete this test. It is now in devkit/build-webpack.
  return;

  return ng('lint')
    .then(({ stdout }) => {
      if (!stdout.match(/All files pass linting\./)) {
        throw new Error(oneLine`
          Expected to match "All files pass linting."
          in ${stdout}.
        `);
      }
    });
}
