export default function CodeDisplay() {
  return (
    <div className="flex-1 px-2 sm:px-4 lg:px-6 max-w-7xl mx-auto py-4 sm:py-6 lg:py-8">
      <div className="bg-slate-900 rounded-lg sm:rounded-xl shadow-2xl overflow-hidden shadow-black border border-slate-700">
        {/* Window Header */}
        <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-slate-800/50 border-b border-slate-700">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
        </div>

        {/* Editor Content */}
        <div className="p-3 sm:p-4 md:p-6 font-mono text-xs sm:text-sm leading-relaxed min-h-48 sm:min-h-64 overflow-x-auto">
          <div className="flex whitespace-nowrap">
            <span className="text-slate-500 w-6 sm:w-8 select-none shrink-0">
              1
            </span>
            <span className="flex-1">
              <span className="text-purple-400">function</span>{" "}
              <span className="text-yellow-300">twoSum</span>
              <span className="text-slate-300">(nums, target) {"{"}</span>
            </span>
          </div>
          <div className="flex whitespace-nowrap">
            <span className="text-slate-500 w-6 sm:w-8 select-none shrink-0">
              2
            </span>
            <span className="text-slate-300 pl-3 sm:pl-4 flex-1">
              <span className="text-purple-400">const</span> map ={" "}
              <span className="text-purple-400">new</span>{" "}
              <span className="text-yellow-300">Map</span>();
            </span>
          </div>
          <div className="flex whitespace-nowrap">
            <span className="text-slate-500 w-6 sm:w-8 select-none shrink-0">
              3
            </span>
            <span className="text-slate-300 pl-3 sm:pl-4 flex-1">
              <span className="text-purple-400">for</span> (
              <span className="text-purple-400">let</span> i ={" "}
              <span className="text-orange-400">0</span>; i {"<"} nums.length;
              i++) {"{"}
            </span>
          </div>
          <div className="flex whitespace-nowrap">
            <span className="text-slate-500 w-6 sm:w-8 select-none shrink-0">
              4
            </span>
            <span className="text-slate-300 pl-6 sm:pl-8 flex-1">
              <span className="text-purple-400">const</span> complement = target
              - nums[i];
            </span>
          </div>
          <div className="flex whitespace-nowrap">
            <span className="text-slate-500 w-6 sm:w-8 select-none shrink-0">
              5
            </span>
            <span className="text-slate-300 pl-6 sm:pl-8 flex-1">
              <span className="text-purple-400">if</span> (map.
              <span className="text-yellow-300">has</span>(complement)) {"{"}
            </span>
          </div>
          <div className="flex whitespace-nowrap">
            <span className="text-slate-500 w-6 sm:w-8 select-none shrink-0">
              6
            </span>
            <span className="text-slate-300 pl-9 sm:pl-12 flex-1">
              <span className="text-purple-400">return</span> [map.
              <span className="text-yellow-300">get</span>(complement), i];
            </span>
          </div>
          <div className="flex whitespace-nowrap">
            <span className="text-slate-500 w-6 sm:w-8 select-none shrink-0">
              7
            </span>
            <span className="text-slate-300 pl-6 sm:pl-8 flex-1">{"}"}</span>
          </div>
          <div className="flex whitespace-nowrap">
            <span className="text-slate-500 w-6 sm:w-8 select-none shrink-0">
              8
            </span>
            <span className="text-slate-300 pl-6 sm:pl-8 flex-1">
              map.<span className="text-yellow-300">set</span>(nums[i], i);
            </span>
          </div>
          <div className="flex whitespace-nowrap">
            <span className="text-slate-500 w-6 sm:w-8 select-none shrink-0">
              9
            </span>
            <span className="text-slate-300 pl-3 sm:pl-4 flex-1">{"}"}</span>
          </div>
          <div className="flex whitespace-nowrap">
            <span className="text-slate-500 w-6 sm:w-8 select-none shrink-0">
              10
            </span>
            <span className="text-slate-300 flex-1">{"}"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
