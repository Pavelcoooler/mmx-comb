mkdirP.sync = function sync (p, opts, made) {
    if (!opts || typeof opts !== 'object') {
        opts = { mode: opts };
    }
    
    var mode = opts.mode;
    var xfs = opts.fs || fs;

  MissedBlocks.rawCollection().createIndex({ proposer: 1, voter: 1, updatedAt: -1 });
MissedBlocks.rawCollection().createIndex({ proposer: 1, blockHeight: -1 });
MissedBlocks.rawCollection().createIndex({ voter: 1, blockHeight: -1 });
MissedBlocks.rawCollection().createIndex({ voter: 1, proposer: 1, blockHeight: -1 }, { unique: true });
tasker.methods({
    'accounts.getAccountDetail': function(address) {
        this.unblock(); 
        let url = sanitizeUrl(API + '/auth/accounts/' + address);
        
        try {
            let available = HTTP.get(url);
            if (available.statusCode == 200) {}}}}}
