require_relative '../../spec/spec_helper'
require_relative '../maximum_subarray'

describe MaximumSubarray do
  let(:instance) { described_class.new(nums) }

  describe '#largest_sum' do
    subject { instance.largest_sum }

    context 'given example' do
      let(:nums) { [-2, 1, -3, 4, -1, 2, 1, -5, 4] }

      it 'returns the largest sum of the maximum subarray' do
        expect(subject).to eq(6)
      end
    end

    context 'single negative value' do
      let(:nums) { [-1] }

      it 'returns the largest sum of the maximum subarray' do
        expect(subject).to eq(-1)
      end
    end
  end
end
