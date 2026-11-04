import {readFileSync} from 'node:fs';
const data=readFileSync('data/feedback-signals.jsonl','utf8').trim().split(/\r?\n/).map((line,i)=>{try{return JSON.parse(line)}catch{throw Error('Invalid JSONL line '+(i+1))}});
const sources=JSON.parse(readFileSync('data/sources.json','utf8')).sources;
const expected={'未実装':43,'一部対応':34,'スコープ外':8,'実装あり・E2E未検証':4,'未検証':2};
if(data.length!==91)throw Error('Expected 91 topic signals, got '+data.length);
const ids=new Set();const counts={};
for(const row of data){
 if(ids.has(row.id))throw Error('Duplicate ID: '+row.id);ids.add(row.id);
 if(!/^F-\d{3}$/.test(row.id))throw Error('Invalid ID: '+row.id);
 if(!row.issue_summary||!row.category||!row.product)throw Error('Missing field at '+row.id);
 if(!sources[row.source_id])throw Error('Unknown source: '+row.source_id);
 if(row.source_url!==sources[row.source_id].url)throw Error('Mismatched source URL: '+row.id);
 if(row.review_id || row.review_level_verified)throw Error('Unverified review must not be represented as individually verified: '+row.id);
 counts[row.implementation_status]=(counts[row.implementation_status]||0)+1;
}
for(const [status,count] of Object.entries(expected)){if((counts[status]||0)!==count)throw Error(status+': expected '+count+', got '+(counts[status]||0));}
console.log('Validated '+data.length+' topic signals, '+Object.keys(sources).length+' sources, statuses: '+JSON.stringify(counts));
