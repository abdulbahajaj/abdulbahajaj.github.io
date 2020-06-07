(ns website.aboutme
  (:require
   [website.contents :as conts]
   [reagent.core :as r]
   [reagent.dom :as d]))

(defn create []
  [conts/create
   [conts/text-body "My name is Abdul Bahajaj, I am a programmer based in Calgary, Alberta. I am interested in devtools, emacs, programming languages, etc"]
   [conts/text-body "This website is underconstruction. I intend for it to be a place I can write about stuff I am interested in and share my projects"]])

