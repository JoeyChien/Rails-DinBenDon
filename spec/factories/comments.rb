FactoryBot.define do
  factory :comment do
    user { nil }
    item { nil }
    content { "MyText" }
    deleted_at { "2020-04-20 10:50:56" }
  end
end
