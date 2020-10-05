import Queue from 'bull';
import redisConfing from '../../config/redis';

import * as jobs from '../jobs';

const queues = Object.values(jobs).map( job => ({
  bull: new Queue(job.key, redisConfing),
  name: job.key,
  handle: job.handle,
  options: job.options
}))

export default {
  queues,
  add(name, data) {
    const queue = this.queues.find(queue.name === name);

    return queue.bull.add(data, queue.options);
  },
  process() {
    this.queues.forEach(queue => {
      queue.bull.process(queue.handle)

      queue.bull.on('failed', (job, err) =>{
        console.log('job failed', queue.key, job.data)
        console.log(err)
      })
    })
  }


}
