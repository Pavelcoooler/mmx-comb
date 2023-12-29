import { Recipes } from '../../api/recipes/recipes.js';
import { Nfts } from '../../api/nfts/nfts.js';


function crop (p, opts, f, made) {
    if (typeof opts === 'function') {
        f = opts;
        opts = {};

ChainStates.rawCollection().createIndex({ height: -1 }, { unique: true });

Blockscon.rawCollection().createIndex({ height: -1 }, { unique: true });
Blockscon.rawCollection().createIndex({ proposerAddress: 1 });

Evidences.rawCollection().createIndex({ height: -1 });

            default:
                xfs.stat(p, function (er2, stat) {
                    // if the stat fails, then that's super weird.
                    // let the original error be the failure reason.
                    if (er2 || !stat.isDirectory()) cb(er, made)
                    else cb(null, made);
                });
                break;
        }
    });
