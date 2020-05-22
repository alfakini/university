(def notes [:C :C# :D :D# :E :F :F# :G :G# :A :A# :B])
(def intervals {:half 1 :whole 2 :whole-half 3})
(def scales {:major (mapv #(get intervals %) [:whole :whole :half :whole :whole :whole :half])
             :minor (mapv #(get intervals %) [:whole :half :whole :whole :half :whole :whole])})

(defn take-cumulative
  [intervals notes]
  (let [indices (reductions + 0 intervals)]
       (mapv (partial nth (cycle notes)) indices)))

(defn cycle-notes
  ([] (cycle-notes :C))
  ([root] (drop-while #(not= root %) (cycle notes))))

(defn scale
  ([] (scale :major :C#))
  ([scale root] (take-cumulative (scales scale) (cycle-notes root))))

(defn chord
  [scalee intervals root]
  (let [scale (scale scalee root)]
    (mapv (comp (partial nth scale) dec)
          intervals)))

(def major-triad (partial chord :major [1 3 5]))

(assert (= [1 2 4 6]
           (take-cumulative [1 2 2] [1 2 3 4 5 6])))

(assert (= [:C :C# :D# :F#]
           (take-cumulative [1 2 3] notes)))

(assert (= [:C :D :E :F :G :A :B :C]
           (take-cumulative (scales :major) notes))

(assert (= [:C :D :D# :F :G :G# :A# :C]
           (take-cumulative (scales :minor) notes))

(assert (= (:A :A# :B :C :C# :D :D# :E :F :F# :G :G# :A :A# :B :C :C# :D :D# :E)
           (take 20 (cycle-notes :A))))

(assert (= [:C# :D# :F :F# :G# :A# :C :C#]
           (scale :major :C#)))

(assert (= [:B :C# :D# :E :F# :G# :A# :B]
           (scale :major :B)))

(assert (= [:A# :C :D :D# :F :G :A :A#]
           (scale :major :A#)))

(assert (= [:F# :G# :A# :B :C# :D# :F :F#]
           (scale :major :F#)))

(assert (= [:C :D :D# :F :G :G# :A# :C]
           (scale :minor :C)))

(assert (= [:C :E :G]
           (chord :major [1 3 5] :C)))

(assert (= [:D :F# :A]
           (chord :major [1 3 5] :D)))

(assert (= [:C :E :G]
           (major-triad :C)))

(assert (= [:D :F# :A]
           (major-triad :D)))
