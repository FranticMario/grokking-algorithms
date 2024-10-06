const graph: Record<string, string[]> = {
    a: ["b", "c"],
    b: ["f"],
    c: ["d", "e"],
    d: ["f"],
    e: ["f"],
    f: ["g"],
};

const breadthSearch = (graph: Record<string, string[]>, start: string, end: string): boolean => {
    let queue: string[] = [];
    let counter: number = 0;

    queue.push(start);

    while (queue.length > 0) {
        counter += 1;
        const current = queue.shift() as string; // Cast ist sicher, da queue immer Strings enthält


        if (!graph[current]) {
            // console.log(!graph[current])
            // console.log(graph[current])
            graph[current] = []; // Füge leeres Array hinzu, wenn kein Eintrag existiert
              console.log(graph[current])
        }

        if (graph[current].includes(end)) {
            // console.log(counter);
            return true;
        } else {
           
            queue = [...queue, ...graph[current]];
        console.log(queue);
        }
    }


    return false;
};


console.log(breadthSearch(graph, "j", "h"))