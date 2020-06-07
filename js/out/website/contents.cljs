(ns website.contents
  (:require
   [reagent.core :as r]
   [reagent.dom :as d]))


(defn heading [text]
  [:div.heading text])

(defn text-body [text]
  [:div.text-body text])

(defn create [& conts]
  [:div.contents conts])
