(ns website.core
  (:require
   [website.navbar :as navbar]
   [website.aboutme :as aboutme]
   [reagent.core :as r]
   [reagent.dom :as d]))

;; -------------------------
;; Views

(defn button [text link alignment])

(defn main-wrapper []
  [:div.main-wrapper
   [navbar/create
    :name "Abdul Bahajaj"
    :linkedin "https://www.linkedin.com/in/abdul-bahajaj-016a9337"
    :github "https://github.com/abdulbahajaj"]
   [aboutme/create]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [main-wrapper] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
