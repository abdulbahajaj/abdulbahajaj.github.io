(ns website.navbar
    (:require
     [reagent.core :as r]
     [reagent.dom :as d]))

(defn button [& {:keys [link icon text active] :or {active false}}]
  [:a.button {:href link :active (if active "true" "false")} icon text ])

(defn create [& {:keys [name linkedin github]}]
  [:div.navbar
   [button :active true :link "#" :icon [:i.icon.fas.fa-poll-h] :text "About me"]
   [button :link github :icon [:i.icon.fab.fa-github] :text "Github"]
   [button :link linkedin :icon [:i.icon.fab.fa-linkedin] :text "Linkedin"]])
