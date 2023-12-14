import {Namer} from '@parcel/plugin';
import path from 'path';


export default new Namer({
    name({bundle, bundleGraph}) {
        const relativePath = path.relative(
            bundleGraph.getEntryRoot(bundle.target),
            bundle.getMainEntry().filePath
        );
        const parsed = path.parse(relativePath);

        return path.join(parsed.dir, `${parsed.name}.${bundle.type}`);
    }
});
