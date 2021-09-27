<template>
    <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-t-lg rounded-b-none">
                    <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Job
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Role
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="(job, i) in showedJobArr" :key="i">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 h-10 w-10">
                                        <img class="h-10 w-10 rounded" :src="job.icon" alt="">
                                    </div>
                                    <div class="ml-4">
                                        <div class="text-sm font-medium text-gray-900">
                                            {{job.job.UnlockedState.Name}}
                                        </div>
                                        <div class="text-sm text-gray-500">
                                            level : {{job.job.Level}}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-capitalize" :class="job.color">
                                    {{job.role}}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div class="flex-1 flex justify-between sm:hidden">
                <a @click="previous" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
                </a>
                <a @click="next" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Next
                </a>
            </div>
            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <a @click="previous" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span class="sr-only">Previous</span>
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        </a>
                        <a v-for="(p, i) in numberOfPages" :key="i" @click="changePage(i+1)" aria-current="page" :class="page === i+1 ? 'bg-indigo-50' : ''" class="z-10 text-indigo-600 border-gray-300 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                        {{i+1}}
                        </a>
                        <a @click="next" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span class="sr-only">Next</span>
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      page: 1,
      limit: 5,
      jobsArr: [],
    //   pagesJobs: []
    }
  },
  props: [ 'jobs', 'charData' ],
  watch:{
      charData:{
          handler(nv, ov){
              console.log('charData', nv, ov)
              if(nv){
                  this.jobList();
              }
          }
      }
  },
  computed: {
      showedJobArr(){
          const vm = this;
          return vm.jobsArr.slice((vm.page - 1) * vm.limit, vm.page * vm.limit);
      },
      numberOfPages(){
          const vm = this;
          return Math.ceil(vm.jobsArr.length/vm.limit)
      }
  },
  methods :{
    init(){
        const vm = this;
        // vm.jobList();
        // for (var i = (vm.page-1) * vm.limit; i < (vm.page * vm.limit); i++) {
        //     // listing_table.innerHTML += objJson[i].adName + "<br>";
        //     vm.pagesJobs.push(vm.jobs[i])
        // }
        // this
    },
    changePage(page){
        const vm = this;
        vm.page = page;
    },
    previous(){
        const vm = this;
        if(vm.page > 1){
            vm.page -= 1;
        }
    },
    next(){
        const vm = this;
        if(vm.page < vm.numberOfPages){
            vm.page += 1;
        }
    },
    jobList(){
        const vm = this;
        let jobs = vm.charData.Character?.ClassJobs || [];
        let newJobsArr = [];
        const healer = ['white mage', 'astrologian', 'scholar'];
        const tank = ['gunbreaker', 'warrior', 'paladin', 'dark knight'];
        const rangedDps = ['bard', 'machinist', 'dancer'];
        const meleeDps = ['ninja', 'samurai', 'monk', 'dragoon'];
        const casterDps = ['red mage', 'black mage', 'summoner', 'blue mage'];
        const dol = ['miner', 'botanis', 'fisher'];
        const doh = ['carpenter', 'blacksmith', 'armorer', 'goldsmith', 'leatherworker', 'weaver', 'alchemist', 'culinarian'];
        // const limitedJob = ['blue mage (limited job)'];
        
        jobs.forEach(job => {
            // console.log('jobs', job.Name.slice(job.Name.lastIndexOf('/') + 2).toLowerCase())
            if(healer.includes(vm.fixJobName(job.Name))){
                newJobsArr.push({
                    job,
                    role: 'healer',
                    color: 'bg-green-100 text-green-800',
                    icon: `/img/ffxivjobsicon/02_HEALER/Job/${vm.fixJobName(job.Name).replace(/\s+/g, '')}.png`
                })
            }
            if(tank.includes(vm.fixJobName(job.Name))){
                newJobsArr.push({
                    job,
                    role: 'tank',
                    color: 'bg-blue-100 text-blue-800',
                    icon: `/img/ffxivjobsicon/01_TANK/Job/${vm.fixJobName(job.Name).replace(/\s+/g, '')}.png`
                })
            }
            if(rangedDps.includes(vm.fixJobName(job.Name))){
                newJobsArr.push({
                    job,
                    role: 'physical ranged DPS',
                    color: 'bg-red-100 text-red-800',
                    icon: `/img/ffxivjobsicon/03_DPS/Job/${vm.fixJobName(job.Name).replace(/\s+/g, '')}.png`
                })
            }
            if(meleeDps.includes(vm.fixJobName(job.Name))){
                newJobsArr.push({
                    job,
                    role: 'melee DPS',
                    color: 'bg-red-100 text-red-800',
                    icon: `/img/ffxivjobsicon/03_DPS/Job/${vm.fixJobName(job.Name).replace(/\s+/g, '')}.png`
                })
            }
            if(casterDps.includes(vm.fixJobName(job.Name))){
                newJobsArr.push({
                    job,
                    role: 'magical ranged DPS',
                    color: 'bg-red-100 text-red-800',
                    icon: `/img/ffxivjobsicon/03_DPS/Job/${vm.fixJobName(job.Name).replace(/\s+/g, '')}.png`
                })
            }
        });
        vm.jobsArr = newJobsArr;
    },
    fixJobName(name){
        const vm = this;

        return name.slice(name.lastIndexOf('/') + 2).toLowerCase();
    }
  },
  mounted(){
      const vm = this;

      vm.init();
  }
}
</script>